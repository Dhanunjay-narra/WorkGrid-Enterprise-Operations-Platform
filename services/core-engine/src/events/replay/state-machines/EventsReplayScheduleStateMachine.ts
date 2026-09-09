export type EventsReplayScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayScheduleStateMachine {
  private allowedTransitions: Record<EventsReplayScheduleState, EventsReplayScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayScheduleState, to: EventsReplayScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayScheduleState, to: EventsReplayScheduleState): EventsReplayScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplaySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
