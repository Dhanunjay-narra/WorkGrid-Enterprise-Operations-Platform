export type EventsPartitionsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsPolicyStateMachine {
  private allowedTransitions: Record<EventsPartitionsPolicyState, EventsPartitionsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsPolicyState, to: EventsPartitionsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsPolicyState, to: EventsPartitionsPolicyState): EventsPartitionsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
