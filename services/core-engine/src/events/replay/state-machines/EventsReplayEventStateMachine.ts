export type EventsReplayEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayEventStateMachine {
  private allowedTransitions: Record<EventsReplayEventState, EventsReplayEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayEventState, to: EventsReplayEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayEventState, to: EventsReplayEventState): EventsReplayEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayEvent: " + from + " -> " + to);
    }
    return to;
  }
}
