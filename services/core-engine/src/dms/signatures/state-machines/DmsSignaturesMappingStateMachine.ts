export type DmsSignaturesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesMappingStateMachine {
  private allowedTransitions: Record<DmsSignaturesMappingState, DmsSignaturesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesMappingState, to: DmsSignaturesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesMappingState, to: DmsSignaturesMappingState): DmsSignaturesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
