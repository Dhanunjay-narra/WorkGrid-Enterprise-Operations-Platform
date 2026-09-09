export type EventsDeadletterThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterThresholdStateMachine {
  private allowedTransitions: Record<EventsDeadletterThresholdState, EventsDeadletterThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterThresholdState, to: EventsDeadletterThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterThresholdState, to: EventsDeadletterThresholdState): EventsDeadletterThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
