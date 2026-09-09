export type ProjectRisksNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectRisksNodeStateMachine {
  private allowedTransitions: Record<ProjectRisksNodeState, ProjectRisksNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectRisksNodeState, to: ProjectRisksNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectRisksNodeState, to: ProjectRisksNodeState): ProjectRisksNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectRisksNode: " + from + " -> " + to);
    }
    return to;
  }
}
