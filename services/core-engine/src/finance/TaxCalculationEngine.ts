export interface TaxJurisdictionRule {
  countryCode: string;
  stateCode?: string;
  standardVatGstRate: number;
  reducedRate?: number;
  digitalServicesTaxRate?: number;
}

export class TaxCalculationEngine {
  private taxRules = new Map<string, TaxJurisdictionRule>();

  constructor() {
    this.taxRules.set('US_CA', { countryCode: 'US', stateCode: 'CA', standardVatGstRate: 7.25 });
    this.taxRules.set('US_NY', { countryCode: 'US', stateCode: 'NY', standardVatGstRate: 8.875 });
    this.taxRules.set('GB', { countryCode: 'GB', standardVatGstRate: 20.0 });
    this.taxRules.set('DE', { countryCode: 'DE', standardVatGstRate: 19.0, reducedRate: 7.0 });
    this.taxRules.set('IN', { countryCode: 'IN', standardVatGstRate: 18.0 });
  }

  public computeTax(subtotal: number, country: string, state?: string): { rate: number; taxAmount: number; totalWithTax: number } {
    const key = state ? `${country}_${state}` : country;
    const rule = this.taxRules.get(key) || this.taxRules.get(country) || { countryCode: country, standardVatGstRate: 0 };

    const rate = rule.standardVatGstRate;
    const taxAmount = (subtotal * rate) / 100;
    const totalWithTax = subtotal + taxAmount;

    return { rate, taxAmount, totalWithTax };
  }
}
