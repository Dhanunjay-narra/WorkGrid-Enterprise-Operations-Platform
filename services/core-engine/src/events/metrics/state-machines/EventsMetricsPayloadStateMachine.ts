export type EventsMetricsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsPayloadStateMachine {
  private allowedTransitions: Record<EventsMetricsPayloadState, EventsMetricsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsPayloadState, to: EventsMetricsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsPayloadState, to: EventsMetricsPayloadState): EventsMetricsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
