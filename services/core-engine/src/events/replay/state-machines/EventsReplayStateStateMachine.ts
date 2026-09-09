export type EventsReplayStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayStateStateMachine {
  private allowedTransitions: Record<EventsReplayStateState, EventsReplayStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayStateState, to: EventsReplayStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayStateState, to: EventsReplayStateState): EventsReplayStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayState: " + from + " -> " + to);
    }
    return to;
  }
}
