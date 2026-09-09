export type EventsReplayTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayTaskStateMachine {
  private allowedTransitions: Record<EventsReplayTaskState, EventsReplayTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayTaskState, to: EventsReplayTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayTaskState, to: EventsReplayTaskState): EventsReplayTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayTask: " + from + " -> " + to);
    }
    return to;
  }
}
