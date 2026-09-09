export type DmsSignaturesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesPayloadStateMachine {
  private allowedTransitions: Record<DmsSignaturesPayloadState, DmsSignaturesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesPayloadState, to: DmsSignaturesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesPayloadState, to: DmsSignaturesPayloadState): DmsSignaturesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
