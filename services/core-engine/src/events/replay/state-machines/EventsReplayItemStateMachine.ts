export type EventsReplayItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayItemStateMachine {
  private allowedTransitions: Record<EventsReplayItemState, EventsReplayItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayItemState, to: EventsReplayItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayItemState, to: EventsReplayItemState): EventsReplayItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayItem: " + from + " -> " + to);
    }
    return to;
  }
}
