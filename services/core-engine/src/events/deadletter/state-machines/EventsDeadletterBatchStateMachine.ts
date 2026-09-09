export type EventsDeadletterBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterBatchStateMachine {
  private allowedTransitions: Record<EventsDeadletterBatchState, EventsDeadletterBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterBatchState, to: EventsDeadletterBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterBatchState, to: EventsDeadletterBatchState): EventsDeadletterBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterBatch: " + from + " -> " + to);
    }
    return to;
  }
}
