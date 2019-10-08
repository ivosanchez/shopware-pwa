import { PropertyGroupOptionCollection } from "../product/PropertyGroupOptionCollection";
import { PropertyGroupOptionTranslationCollection } from "./PropertyGroupOptionTranslationCollection";
export interface PropertyGroupEntity {
    name: string | null;
    displayType: string;
    sortingType: string;
    description: string | null;
    options: PropertyGroupOptionCollection | null;
    translations: PropertyGroupOptionTranslationCollection | null;
    customFields: [] | null;
}
