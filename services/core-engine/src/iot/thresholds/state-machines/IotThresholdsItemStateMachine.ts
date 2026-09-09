export type IotThresholdsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsItemStateMachine {
  private allowedTransitions: Record<IotThresholdsItemState, IotThresholdsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsItemState, to: IotThresholdsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsItemState, to: IotThresholdsItemState): IotThresholdsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsItem: " + from + " -> " + to);
    }
    return to;
  }
}
