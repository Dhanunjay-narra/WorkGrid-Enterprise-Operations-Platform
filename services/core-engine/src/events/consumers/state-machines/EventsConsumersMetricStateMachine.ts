export type EventsConsumersMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersMetricStateMachine {
  private allowedTransitions: Record<EventsConsumersMetricState, EventsConsumersMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersMetricState, to: EventsConsumersMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersMetricState, to: EventsConsumersMetricState): EventsConsumersMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersMetric: " + from + " -> " + to);
    }
    return to;
  }
}
