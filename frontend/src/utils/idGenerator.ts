export class IDGenerator {
  private static readonly CLIENT_PREFIX = 'NCFLCL';
  private static readonly CAREGIVER_PREFIX = 'NCFLCG';
  private static readonly EMPLOYEE_PREFIX = 'NCFLEM';

  static parseID(id: string) {
    const match = id.match(/(NCFL[A-Z]{2})(\d{4})(\d{6})/);
    if (match) {
      return {
        prefix: match[1],
        year: parseInt(match[2], 10),
        sequence: parseInt(match[3], 10),
      };
    }
    return null;
  }

  static extractSequence(id: string): number {
    const match = id.match(/(\d{6})$/);
    return match ? parseInt(match[1], 10) : 0;
  }

  static extractYear(id: string): number {
    const match = id.match(/(\d{4})\d{6}$/);
    return match ? parseInt(match[1], 10) : new Date().getFullYear();
  }

  static formatIDDisplay(id: string): string {
    const parsed = this.parseID(id);
    if (parsed) {
      return `${parsed.prefix}-${parsed.year}-${String(parsed.sequence).padStart(6, '0')}`;
    }
    return id;
  }
}
