import { TicketPriority } from '@nexora/types';

export class SLACalculator {
  private slaThresholdHours: Record<TicketPriority, number> = {
    [TicketPriority.P1_CRITICAL]: 1,
    [TicketPriority.P2_HIGH]: 4,
    [TicketPriority.P3_MEDIUM]: 12,
    [TicketPriority.P4_LOW]: 48
  };

  public calculateBreachDeadline(priority: TicketPriority, creationDate: Date = new Date()): Date {
    const hours = this.slaThresholdHours[priority] || 24;
    const breachTime = new Date(creationDate.getTime() + hours * 60 * 60 * 1000);
    return breachTime;
  }

  public isBreached(deadline: Date, now: Date = new Date()): boolean {
    return now.getTime() > deadline.getTime();
  }
}
