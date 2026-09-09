export type EventsReplayBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayBatchStateMachine {
  private allowedTransitions: Record<EventsReplayBatchState, EventsReplayBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayBatchState, to: EventsReplayBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayBatchState, to: EventsReplayBatchState): EventsReplayBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayBatch: " + from + " -> " + to);
    }
    return to;
  }
}
