export type EventsOutboxReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxReportStateMachine {
  private allowedTransitions: Record<EventsOutboxReportState, EventsOutboxReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxReportState, to: EventsOutboxReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxReportState, to: EventsOutboxReportState): EventsOutboxReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxReport: " + from + " -> " + to);
    }
    return to;
  }
}
