export type EventsReplayProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayProfileStateMachine {
  private allowedTransitions: Record<EventsReplayProfileState, EventsReplayProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayProfileState, to: EventsReplayProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayProfileState, to: EventsReplayProfileState): EventsReplayProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayProfile: " + from + " -> " + to);
    }
    return to;
  }
}
