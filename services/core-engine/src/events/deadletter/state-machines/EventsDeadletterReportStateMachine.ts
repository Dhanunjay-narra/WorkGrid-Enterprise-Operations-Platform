export type EventsDeadletterReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterReportStateMachine {
  private allowedTransitions: Record<EventsDeadletterReportState, EventsDeadletterReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterReportState, to: EventsDeadletterReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterReportState, to: EventsDeadletterReportState): EventsDeadletterReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterReport: " + from + " -> " + to);
    }
    return to;
  }
}
