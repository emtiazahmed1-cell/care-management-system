import { v4 as uuidv4 } from 'uuid';

/**
 * Generate Client ID with format: NCFLCL2026000001
 * - NCFL = Organization prefix
 * - CL = Client
 * - 2026 = Current year
 * - 000001 = Sequential number
 */
export class IDGenerator {
  private static readonly CLIENT_PREFIX = 'NCFLCL';
  private static readonly CAREGIVER_PREFIX = 'NCFLCG';
  private static readonly EMPLOYEE_PREFIX = 'NCFLEM';

  static generateClientID(sequenceNumber: number): string {
    const year = new Date().getFullYear();
    const sequence = String(sequenceNumber).padStart(6, '0');
    return `${this.CLIENT_PREFIX}${year}${sequence}`;
  }

  static generateCaregiverID(sequenceNumber: number): string {
    const year = new Date().getFullYear();
    const sequence = String(sequenceNumber).padStart(6, '0');
    return `${this.CAREGIVER_PREFIX}${year}${sequence}`;
  }

  static generateEmployeeID(sequenceNumber: number): string {
    const year = new Date().getFullYear();
    const sequence = String(sequenceNumber).padStart(6, '0');
    return `${this.EMPLOYEE_PREFIX}${year}${sequence}`;
  }

  static generateUUID(): string {
    return uuidv4();
  }

  /**
   * Extract sequence number from ID
   * Example: NCFLCL2026000001 -> 1
   */
  static extractSequenceFromID(id: string): number {
    const match = id.match(/(\d{6})$/);
    return match ? parseInt(match[1], 10) : 0;
  }

  /**
   * Extract year from ID
   * Example: NCFLCL2026000001 -> 2026
   */
  static extractYearFromID(id: string): number {
    const match = id.match(/(\d{4})\d{6}$/);
    return match ? parseInt(match[1], 10) : new Date().getFullYear();
  }
}
