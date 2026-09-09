export type EventsReplayRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayRecordStateMachine {
  private allowedTransitions: Record<EventsReplayRecordState, EventsReplayRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayRecordState, to: EventsReplayRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayRecordState, to: EventsReplayRecordState): EventsReplayRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayRecord: " + from + " -> " + to);
    }
    return to;
  }
}
