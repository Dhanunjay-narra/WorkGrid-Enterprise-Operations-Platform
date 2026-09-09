export type RbacPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacPayloadStateMachine {
  private allowedTransitions: Record<RbacPayloadState, RbacPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacPayloadState, to: RbacPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacPayloadState, to: RbacPayloadState): RbacPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacPayload: " + from + " -> " + to);
    }
    return to;
  }
}
