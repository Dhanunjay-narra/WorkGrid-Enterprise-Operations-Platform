export type EventsDeadletterItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterItemStateMachine {
  private allowedTransitions: Record<EventsDeadletterItemState, EventsDeadletterItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterItemState, to: EventsDeadletterItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterItemState, to: EventsDeadletterItemState): EventsDeadletterItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterItem: " + from + " -> " + to);
    }
    return to;
  }
}
