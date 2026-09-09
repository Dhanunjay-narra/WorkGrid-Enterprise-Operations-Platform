export type EventsReplayConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayConfigStateMachine {
  private allowedTransitions: Record<EventsReplayConfigState, EventsReplayConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayConfigState, to: EventsReplayConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayConfigState, to: EventsReplayConfigState): EventsReplayConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayConfig: " + from + " -> " + to);
    }
    return to;
  }
}
