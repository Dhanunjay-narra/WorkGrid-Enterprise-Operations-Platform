export type EventsPartitionsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsSummaryStateMachine {
  private allowedTransitions: Record<EventsPartitionsSummaryState, EventsPartitionsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsSummaryState, to: EventsPartitionsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsSummaryState, to: EventsPartitionsSummaryState): EventsPartitionsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
