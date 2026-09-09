export type DmsOcrPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrPayloadStateMachine {
  private allowedTransitions: Record<DmsOcrPayloadState, DmsOcrPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrPayloadState, to: DmsOcrPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrPayloadState, to: DmsOcrPayloadState): DmsOcrPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrPayload: " + from + " -> " + to);
    }
    return to;
  }
}
