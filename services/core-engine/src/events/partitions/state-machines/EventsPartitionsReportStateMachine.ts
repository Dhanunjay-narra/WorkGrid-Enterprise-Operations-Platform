export type EventsPartitionsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsReportStateMachine {
  private allowedTransitions: Record<EventsPartitionsReportState, EventsPartitionsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsReportState, to: EventsPartitionsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsReportState, to: EventsPartitionsReportState): EventsPartitionsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsReport: " + from + " -> " + to);
    }
    return to;
  }
}
