export type EventsReplayEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayEntryStateMachine {
  private allowedTransitions: Record<EventsReplayEntryState, EventsReplayEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayEntryState, to: EventsReplayEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayEntryState, to: EventsReplayEntryState): EventsReplayEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayEntry: " + from + " -> " + to);
    }
    return to;
  }
}
