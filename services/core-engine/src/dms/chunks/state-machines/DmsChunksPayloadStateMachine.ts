export type DmsChunksPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksPayloadStateMachine {
  private allowedTransitions: Record<DmsChunksPayloadState, DmsChunksPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksPayloadState, to: DmsChunksPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksPayloadState, to: DmsChunksPayloadState): DmsChunksPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksPayload: " + from + " -> " + to);
    }
    return to;
  }
}
