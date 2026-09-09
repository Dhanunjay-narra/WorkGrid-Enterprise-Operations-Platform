export type EventsPartitionsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsBatchStateMachine {
  private allowedTransitions: Record<EventsPartitionsBatchState, EventsPartitionsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsBatchState, to: EventsPartitionsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsBatchState, to: EventsPartitionsBatchState): EventsPartitionsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
