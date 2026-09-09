export type EventsConsumersReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersReportStateMachine {
  private allowedTransitions: Record<EventsConsumersReportState, EventsConsumersReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersReportState, to: EventsConsumersReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersReportState, to: EventsConsumersReportState): EventsConsumersReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersReport: " + from + " -> " + to);
    }
    return to;
  }
}
