export type DmsVersionsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsPayloadStateMachine {
  private allowedTransitions: Record<DmsVersionsPayloadState, DmsVersionsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsPayloadState, to: DmsVersionsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsPayloadState, to: DmsVersionsPayloadState): DmsVersionsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
