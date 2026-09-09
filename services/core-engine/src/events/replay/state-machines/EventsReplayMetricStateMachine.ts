export type EventsReplayMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayMetricStateMachine {
  private allowedTransitions: Record<EventsReplayMetricState, EventsReplayMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayMetricState, to: EventsReplayMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayMetricState, to: EventsReplayMetricState): EventsReplayMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayMetric: " + from + " -> " + to);
    }
    return to;
  }
}
