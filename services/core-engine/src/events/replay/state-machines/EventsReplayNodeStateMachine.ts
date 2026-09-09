export type EventsReplayNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayNodeStateMachine {
  private allowedTransitions: Record<EventsReplayNodeState, EventsReplayNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayNodeState, to: EventsReplayNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayNodeState, to: EventsReplayNodeState): EventsReplayNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayNode: " + from + " -> " + to);
    }
    return to;
  }
}
