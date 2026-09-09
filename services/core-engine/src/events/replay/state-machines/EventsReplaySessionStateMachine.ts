export type EventsReplaySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplaySessionStateMachine {
  private allowedTransitions: Record<EventsReplaySessionState, EventsReplaySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplaySessionState, to: EventsReplaySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplaySessionState, to: EventsReplaySessionState): EventsReplaySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplaySession: " + from + " -> " + to);
    }
    return to;
  }
}
