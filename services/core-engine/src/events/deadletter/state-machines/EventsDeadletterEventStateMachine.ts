export type EventsDeadletterEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterEventStateMachine {
  private allowedTransitions: Record<EventsDeadletterEventState, EventsDeadletterEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterEventState, to: EventsDeadletterEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterEventState, to: EventsDeadletterEventState): EventsDeadletterEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterEvent: " + from + " -> " + to);
    }
    return to;
  }
}
