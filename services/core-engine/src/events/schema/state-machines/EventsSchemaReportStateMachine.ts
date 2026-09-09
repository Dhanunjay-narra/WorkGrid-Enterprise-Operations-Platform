export type EventsSchemaReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaReportStateMachine {
  private allowedTransitions: Record<EventsSchemaReportState, EventsSchemaReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaReportState, to: EventsSchemaReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaReportState, to: EventsSchemaReportState): EventsSchemaReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaReport: " + from + " -> " + to);
    }
    return to;
  }
}
