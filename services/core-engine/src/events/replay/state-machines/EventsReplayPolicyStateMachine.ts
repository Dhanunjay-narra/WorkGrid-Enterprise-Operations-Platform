export type EventsReplayPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayPolicyStateMachine {
  private allowedTransitions: Record<EventsReplayPolicyState, EventsReplayPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayPolicyState, to: EventsReplayPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayPolicyState, to: EventsReplayPolicyState): EventsReplayPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
