export type EventsDeadletterConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterConfigStateMachine {
  private allowedTransitions: Record<EventsDeadletterConfigState, EventsDeadletterConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterConfigState, to: EventsDeadletterConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterConfigState, to: EventsDeadletterConfigState): EventsDeadletterConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterConfig: " + from + " -> " + to);
    }
    return to;
  }
}
