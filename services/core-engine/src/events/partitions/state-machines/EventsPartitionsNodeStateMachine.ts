export type EventsPartitionsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsNodeStateMachine {
  private allowedTransitions: Record<EventsPartitionsNodeState, EventsPartitionsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsNodeState, to: EventsPartitionsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsNodeState, to: EventsPartitionsNodeState): EventsPartitionsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsNode: " + from + " -> " + to);
    }
    return to;
  }
}
