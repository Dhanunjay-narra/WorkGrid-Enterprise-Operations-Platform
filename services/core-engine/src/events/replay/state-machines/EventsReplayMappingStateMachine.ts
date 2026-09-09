export type EventsReplayMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayMappingStateMachine {
  private allowedTransitions: Record<EventsReplayMappingState, EventsReplayMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayMappingState, to: EventsReplayMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayMappingState, to: EventsReplayMappingState): EventsReplayMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayMapping: " + from + " -> " + to);
    }
    return to;
  }
}
