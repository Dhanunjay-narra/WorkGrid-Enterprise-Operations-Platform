export type EventsOutboxNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxNodeStateMachine {
  private allowedTransitions: Record<EventsOutboxNodeState, EventsOutboxNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxNodeState, to: EventsOutboxNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxNodeState, to: EventsOutboxNodeState): EventsOutboxNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxNode: " + from + " -> " + to);
    }
    return to;
  }
}
