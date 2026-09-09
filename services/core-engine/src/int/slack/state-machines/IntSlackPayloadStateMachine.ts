export type IntSlackPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackPayloadStateMachine {
  private allowedTransitions: Record<IntSlackPayloadState, IntSlackPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackPayloadState, to: IntSlackPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackPayloadState, to: IntSlackPayloadState): IntSlackPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackPayload: " + from + " -> " + to);
    }
    return to;
  }
}
