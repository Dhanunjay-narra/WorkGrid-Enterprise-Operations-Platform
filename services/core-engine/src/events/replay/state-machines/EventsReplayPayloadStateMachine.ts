export type EventsReplayPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayPayloadStateMachine {
  private allowedTransitions: Record<EventsReplayPayloadState, EventsReplayPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayPayloadState, to: EventsReplayPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayPayloadState, to: EventsReplayPayloadState): EventsReplayPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayPayload: " + from + " -> " + to);
    }
    return to;
  }
}
