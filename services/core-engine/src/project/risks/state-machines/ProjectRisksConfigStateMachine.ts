export type ProjectRisksConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksConfigStateMachine {
  private allowedTransitions: Record<ProjectRisksConfigState, ProjectRisksConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksConfigState, to: ProjectRisksConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksConfigState, to: ProjectRisksConfigState): ProjectRisksConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksConfig: " + from + " -> " + to);
    }
    return to;
  }
}
