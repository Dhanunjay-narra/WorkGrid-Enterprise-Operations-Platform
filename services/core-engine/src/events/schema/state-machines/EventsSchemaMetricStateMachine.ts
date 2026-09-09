export type EventsSchemaMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaMetricStateMachine {
  private allowedTransitions: Record<EventsSchemaMetricState, EventsSchemaMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaMetricState, to: EventsSchemaMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaMetricState, to: EventsSchemaMetricState): EventsSchemaMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaMetric: " + from + " -> " + to);
    }
    return to;
  }
}
