export type EventsMetricsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsRecordStateMachine {
  private allowedTransitions: Record<EventsMetricsRecordState, EventsMetricsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsRecordState, to: EventsMetricsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsRecordState, to: EventsMetricsRecordState): EventsMetricsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
