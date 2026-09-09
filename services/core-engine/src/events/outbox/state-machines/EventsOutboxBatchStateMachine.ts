export type EventsOutboxBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxBatchStateMachine {
  private allowedTransitions: Record<EventsOutboxBatchState, EventsOutboxBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxBatchState, to: EventsOutboxBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxBatchState, to: EventsOutboxBatchState): EventsOutboxBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxBatch: " + from + " -> " + to);
    }
    return to;
  }
}
