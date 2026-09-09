export type EventsDeadletterMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterMetricStateMachine {
  private allowedTransitions: Record<EventsDeadletterMetricState, EventsDeadletterMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterMetricState, to: EventsDeadletterMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterMetricState, to: EventsDeadletterMetricState): EventsDeadletterMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterMetric: " + from + " -> " + to);
    }
    return to;
  }
}
