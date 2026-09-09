export type EventsPartitionsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsMappingStateMachine {
  private allowedTransitions: Record<EventsPartitionsMappingState, EventsPartitionsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsMappingState, to: EventsPartitionsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsMappingState, to: EventsPartitionsMappingState): EventsPartitionsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
