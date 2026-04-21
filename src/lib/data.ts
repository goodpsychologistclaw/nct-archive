import raw from "../../data/nct-data-zh.json";

export interface Institution {
  id: string;
  name: string;
  addr: string;
  province: string;
  prov: string;
  city: string;
  county: string;
  else: string;
  lat: number;
  lng: number;
  experience: string;
  HMaster: string;
  scandal: string;
  contact: string;
  inputType: string;
  dateStart: string;
  dateEnd: string;
}

interface SourceData {
  avg_age: number;
  schoolNum: number;
  formNum: number;
  last_synced: number;
  statistics: Array<{ province: string; count: number }>;
  statisticsForm: Array<{ province: string; count: number }>;
  data: Omit<Institution, "id">[];
  source: string;
  preferredSource: string;
  isSourceFallback: boolean;
}

const source = raw as SourceData;

const normalize = (value: string) => value.trim();
const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\u4e00-\u9fff-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const records: Institution[] = source.data.map((item, index) => {
  const base = slugify(`${item.name}-${item.addr || index}`);
  return {
    ...item,
    id: `${base || "institution"}-${index + 1}`,
    name: normalize(item.name),
    addr: normalize(item.addr),
    province: normalize(item.province),
    prov: normalize(item.prov),
    city: normalize(item.city),
    county: normalize(item.county),
    else: normalize(item.else),
    experience: normalize(item.experience),
    HMaster: normalize(item.HMaster),
    scandal: normalize(item.scandal),
    contact: normalize(item.contact),
    inputType: normalize(item.inputType),
    dateStart: normalize(item.dateStart),
    dateEnd: normalize(item.dateEnd)
  };
});

export const meta = {
  avgAge: source.avg_age,
  schoolNum: source.schoolNum,
  formNum: source.formNum,
  lastSynced: new Date(source.last_synced).toISOString(),
  statistics: source.statistics,
  statisticsForm: source.statisticsForm,
  source: source.source,
  preferredSource: source.preferredSource,
  isSourceFallback: source.isSourceFallback
};

export const provinceOptions = Array.from(
  new Set(records.map((entry) => entry.province).filter(Boolean))
).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
